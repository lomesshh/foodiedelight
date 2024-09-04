import useToggle from "../../hooks/useToggle";
import axios from "axios"
import { useQuery, useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify';
import { useState } from "react";

const useRestaurants = () => {
    const [showModal, setShowModal] = useToggle(false);
    const [selectedRestaurant, setSelectedRestaurant] = useState({});

    const { data: restaurantsData, isLoading, refetch: getRestaurants } = useQuery({
        queryKey: ["getRestaurants"],
        queryFn: async () => {
            const res = await axios.get('http://localhost:8080/restaurants');
            return res?.data?.data;
        },
        onError: () => {
            toast.error("Unable to fetch restaurants Please try again later");
        }
    });

    const deleteRestaurant = useMutation({
        mutationFn: (restaurant) => {
            return axios.delete(`http://localhost:8080/restaurants/${restaurant._id}`)
        },
        onSuccess: () => {
            getRestaurants()
            toast.success("Restaurant deleted successfully")
        },
        onError: () => {
            toast.error("Unable to delete restaurant Please try again later");
        }
    })

    return {
        showModal, 
        setShowModal,
        restaurantsData: restaurantsData || [],
        isLoading,
        getRestaurants,
        deleteRestaurant,
        selectedRestaurant, 
        setSelectedRestaurant
    }
}

export default useRestaurants;
