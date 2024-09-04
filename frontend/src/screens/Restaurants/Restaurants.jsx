import React from 'react'
import './styles.css';
import AddorEditModal from '../../Components/AddorEditModal/AddorEditModal';
import useRestaurants from './useRestaurants';

const Restaurants = () => {

    const {
        showModal,
        setShowModal,
        restaurantsData,
        isLoading,
        getRestaurants,
        deleteRestaurant,
        selectedRestaurant,
        setSelectedRestaurant
    } = useRestaurants();

    return (
        <div>
            <AddorEditModal
                open={showModal}
                setOpen={setShowModal}
                getRestaurants={getRestaurants}
                selectedRestaurant={selectedRestaurant}
                setSelectedRestaurant={setSelectedRestaurant}
            />
            <div className='button__section'>
                <button onClick={setShowModal} className='add__restaurant__button'>Add Restaurant</button>
            </div>
            {!isLoading ? <>
                {
                    restaurantsData?.map((restaurant) => (
                        <div className='list__card'>
                            <div className='first__section'>
                                <p>Restaurant Name : {restaurant?.restaurantsName}</p>
                                <p>Phone No. : {restaurant?.phone}</p>
                                <p>Restaurant type : {restaurant?.type}</p>
                            </div>
                            <div className='second__section'>
                                <p>Description : {restaurant?.description}</p>
                                <p>Address : {restaurant?.address}</p>
                                <p>GST No. : {restaurant?.gstNo}</p>
                            </div>
                            <div className='third__section'>
                                <button className='edit__button' onClick={() => {
                                    setSelectedRestaurant(restaurant)
                                    setShowModal()
                                }}>Edit <i class="fa-solid fa-pen"></i>
                                </button>
                                <button className='delete__button' onClick={() => deleteRestaurant.mutate(restaurant)}>Delete <i class="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                    ))
                }
            </> :
                <div className='loader__section'>
                    <div className='loader'></div>
                </div>}
        </div>
    )
}

export default Restaurants