import { useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import axios from "axios"
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const useAddorEditModal = (getRestaurants, selectedRestaurant, setSelectedRestaurant, setOpen) => {
    const [currAction, setCurrAction] = useState("ADD")

    useEffect(() => {
        if (selectedRestaurant?.restaurantsName) {
            formik.setValues({
                restaurantsName: selectedRestaurant.restaurantsName || "",
                description: selectedRestaurant.description || "",
                phone: selectedRestaurant.phone || "",
                address: selectedRestaurant.address || "",
                type: selectedRestaurant.type || "",
                gstNo: selectedRestaurant.gstNo || ""
            });
            setCurrAction("EDIT")
        } else {
            setCurrAction("ADD")
        }
    }, [selectedRestaurant])

    const addRestaurant = useMutation({
        mutationFn: (newRestaurant) => {
            return axios.post('https://foodiedelight-five.vercel.app/restaurants', newRestaurant)
        },
        onSuccess: () => {
            getRestaurants()
            setSelectedRestaurant({})
            toast.success("Restaurant added successfully")
            setCurrAction("ADD")
        },
        onError: () => {
            toast.error("Unable to add restaurant Please try again later");
        }
    })

    const updateRestaurant = useMutation({
        mutationFn: (restaurant) => {
            return axios.put(`https://foodiedelight-five.vercel.app/restaurants/${selectedRestaurant._id}`, restaurant)
        },
        onSuccess: () => {
            getRestaurants()
            setSelectedRestaurant({})
            toast.success("Restaurant updated successfully")
            setCurrAction("ADD")
        },
        onError: () => {
            toast.error("Unable to update restaurant Please try again later");
        }
    })

    const formik = useFormik({
        initialValues: {
            restaurantsName: "",
            description: "",
            phone: "",
            address: "",
            type: "",
            gstNo: ""
        },
        validationSchema: Yup.object().shape({
            restaurantsName: Yup.string()
                .required('Required'),
            description: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .required('Required'),
            phone: Yup.string()
                .test('len', 'Must be 10 characters', val => val.length === 10)
                .required('Required'),
            address: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .required('Required'),
            type: Yup.string()
                .required('Required'),
            gstNo: Yup.string()
                .test('len', 'Must be 15 characters', val => val.length === 15)
                .required('Required'),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            if (currAction === "ADD") {
                addRestaurant.mutate(values)
            } else {
                updateRestaurant.mutate(values)
            }
            setOpen();
            resetForm();
        },
    });

    return {
        addRestaurant,
        currAction,
        updateRestaurant,
        formik
    }
}

export default useAddorEditModal;
