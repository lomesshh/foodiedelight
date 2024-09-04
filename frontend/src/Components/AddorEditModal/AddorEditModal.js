import React from 'react'
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    MenuItem,
    TextField,
} from "@material-ui/core";
import './styles.css';
import useAddorEditModal from './useAddorEditModal';

const AddorEditModal = ({ open, setOpen, getRestaurants, selectedRestaurant, setSelectedRestaurant }) => {

    const {
        currAction,
        formik
    } = useAddorEditModal(getRestaurants, selectedRestaurant, setSelectedRestaurant, setOpen);

    return (
        <Dialog fullWidth maxWidth="sm" open={open} onClose={() => {
            setOpen()
            formik.resetForm();
            setSelectedRestaurant({})
        }}>
            <DialogTitle className='dialog__title'><h3>{currAction === "ADD" ? "Add" : "Edit"} Restaurant</h3></DialogTitle>
            <form onSubmit={formik.handleSubmit}>
                <DialogContent>
                    <div className='content__section'>
                        <h3>Restaurant name</h3>
                        <TextField
                            variant="outlined"
                            name="restaurantsName"
                            onChange={formik.handleChange}
                            value={formik.values.restaurantsName}
                            size="small"
                        />
                    </div>
                    {formik.touched.restaurantsName && formik.errors.restaurantsName ? (
                        <p className='error__message'>{formik.errors.restaurantsName}</p>
                    ) : null}
                    <div className='content__section'>
                        <h3>Description</h3>
                        <TextField
                            variant="outlined"
                            name="description"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                            size="small"
                        />
                    </div>
                    {formik.touched.description && formik.errors.description ? (
                        <p className='error__message'>{formik.errors.description}</p>
                    ) : null}
                    <div className='content__section'>
                        <h3>Phone Number</h3>
                        <TextField
                            variant="outlined"
                            name="phone"
                            type='number'
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                            size="small"
                        />
                    </div>
                    {formik.touched.phone && formik.errors.phone ? (
                        <p className='error__message'>{formik.errors.phone}</p>
                    ) : null}
                    <div className='content__section'>
                        <h3>Address</h3>
                        <TextField
                            variant="outlined"
                            name="address"
                            onChange={formik.handleChange}
                            value={formik.values.address}
                            size="small"
                        />
                    </div>
                    {formik.touched.address && formik.errors.address ? (
                        <p className='error__message'>{formik.errors.address}</p>
                    ) : null}
                    <div className='content__section'>
                        <h3>Restaurant type</h3>
                        <TextField
                            variant="outlined"
                            select
                            name="type"
                            onChange={formik.handleChange}
                            value={formik.values.type}
                            size="small"
                        >
                            <MenuItem value="Indian">Indian</MenuItem>
                            <MenuItem value="Italian">Italian</MenuItem>
                            <MenuItem value="Chinese">Chinese</MenuItem>
                            <MenuItem value="Mexican">Mexican</MenuItem>
                        </TextField>
                    </div>
                    {formik.touched.type && formik.errors.type ? (
                        <p className='error__message'>{formik.errors.type}</p>
                    ) : null}
                    <div className='content__section'>
                        <h3>GST Number</h3>
                        <TextField
                            variant="outlined"
                            name="gstNo"
                            onChange={formik.handleChange}
                            value={formik.values.gstNo}
                            size="small"
                        />
                    </div>
                    {formik.touched.gstNo && formik.errors.gstNo ? (
                        <p className='error__message'>{formik.errors.gstNo}</p>
                    ) : null}
                </DialogContent>
                <DialogActions>
                    <button className='save__button' type='submit'>Save</button>
                    <button className='cancel__button' type="button" onClick={() => {
                        setOpen()
                        formik.resetForm();
                        setSelectedRestaurant({})
                    }}>Cancel</button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default AddorEditModal