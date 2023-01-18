import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";import {TextField,FormControlLabel,Button,Stack,FormControl,RadioGroup,FormLabel,Radio} from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import IconButton from '@mui/material/IconButton';
import '../styles/Register.css';

export default function Register({login}) {
    const nav = useNavigate()
    useEffect(() => {
      if (login) {
        console.log("kjknjkb");
        nav('/dashboard')
      }
    }, [login])

    const [details, setDetails] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        location: "",
        company: "",
        type: ""
    })

    const [image , setImage] = useState("");

    const handleImage = (e) => {
        console.log(e.target.files);
        setImage(e.target.files[0]);
        console.log(image);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prev) => {
            return { ...prev, [name]: value };
        })
    };

    console.log(details);

    return (
        <div>
            <div className="registerForm" style={{ "border": "2px solid #A0A189", "borderRadius": "10px" }}>
                <form>
                    <Stack spacing={10} direction="row" justifyContent={"space-evenly"} alignItems={"center"}>
                        <div>
                        <h1 className="signUp">Sign up</h1>
                            <Stack spacing={2}>
                                <div>
                                    <p className="registerText">Name</p>
                                    <TextField name="name" onChange={handleChange} variant="filled" style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "width": "100%" }} />
                                </div>
                                <div>
                                    <p className="registerText">Email</p>
                                    <TextField name="email" type="email" onChange={handleChange} style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "width": "100%" }} />
                                </div>
                                <div>
                                    <p className="registerText">Phone</p>
                                    <TextField name="phone" type="tel" onChange={handleChange} variant="filled" style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "width": "100%" }} />
                                </div>
                                <div>
                                    <p className="registerText">Password</p>
                                    <TextField name="password" type="password" onChange={handleChange} variant="filled" style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "width": "100%" }} />
                                </div>
                            </Stack>
                        </div>
                        <div>
                        <div>
                        <Stack alignItems="center" spacing={2} className="uploadPersonalImage">
                        <IconButton aria-label="upload picture" component="label" style={{"color":"#50734F"}}>
                        <input hidden onChange={handleImage} accept="image/*" type="file" />
                        <AddAPhotoIcon />
                        </IconButton>
                        <Button variant="contained" component="label" color="inherit" style={{"backgroundColor": "#F0F5D1","width": "100%","margin":"20px", "borderRadius":"20px"}}>
                        <p className='registerTextImage'>Your Image</p>
                        <input hidden onChange={handleImage} accept="image/*" multiple type="file" />
                        </Button>
                        </Stack>
                        <Stack spacing={2}>
                                <div>
                                    <p className="registerText">Location</p>
                                    <TextField name="location" onChange={handleChange} variant="filled" style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "width": "100%" }} />
                                </div>
                                <div>
                                    <p className="registerText">Company</p>
                                    <TextField name="company" onChange={handleChange} style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "width": "100%" }} />
                                </div>
                        </Stack>
                        </div>
                            <div style={{ "width": "30px", "height":"20px" }}></div>
                            <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label"><p className="registerText">Select the account type</p></FormLabel>
                                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                        <FormControlLabel onClick={handleChange} name="type" value="farmer" control={<Radio sx={{ "color": "#A0A189", '&.Mui-checked': { "color": "#A0A189" } }} />} label="Farmer" />
                                        <FormControlLabel onClick={handleChange} name="type" value="buyer" control={<Radio sx={{ "color": "#A0A189", '&.Mui-checked': { "color": "#A0A189" } }} />} label="Buyer" />
                                    </RadioGroup>
                            </FormControl>
                        </div>
                    </Stack>
                    <p className="alreadyRegistered">Already have an account?<a href="#"> Login</a></p>
                    <Button color="inherit" style={{ "backgroundColor": "#F0F5D1", "width": "60%", "margin": "20px","border": "2px solid #A0A189", "borderRadius": "20px" }}><p className="Navbar-text">Submit</p></Button>
                </form>
            </div>
        </div>
    )
};