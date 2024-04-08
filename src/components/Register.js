import React, { useState } from 'react'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'
import FinalStep from './FinalStep'
import { Box, Step, StepLabel, Stepper } from '@mui/material'

const Register = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [formData,setFormData]=useState({email:"",set_password:"",confirm_password:"",firstName:"",lastName:"",hospitalName:"",mobileNumber:""});

    const handleNext = () => {
        setActiveStep((prevStep) => prevStep + 1)
    }

    const handleSubmitForm=()=>{
        console.log(formData)
    }

    const steps = ['Account Credentials', 'Set Password', 'Personal Details']

    // return (
    //     <div style={{display:'flex' , position:'absolute' , top:'50%', left:'50%',transform: 'translate(-50%, -50%)'}}>
    //         <div>
    //             <img style={{width:'400px'}} src='\images\login_page.jpg' alt='login-page-image'/>
    //         </div>
    //         <div className='all-form-container'>
    //             <Box>
    //                 <Stepper activeStep={activeStep}>
    //                     {steps.map((label, index) => (
    //                         <Step>
    //                             <StepLabel>{label}</StepLabel>
    //                         </Step>
    //                     ))}
    //                 </Stepper>
    //             </Box>
    //             <Box>
    //                 {activeStep === 0 && (<FirstStep formData={formData} setFormData={setFormData} handleNext={handleNext} />)}
    //                 {activeStep === 1 && (<SecondStep formData={formData} setFormData={setFormData} handleNext={handleNext} />)}
    //                 {activeStep === 2 && (<ThirdStep formData={formData} setFormData={setFormData} handleNext={handleNext} />)}
    //                 {activeStep === 3 && (<FinalStep handleSubmitForm={handleSubmitForm} handleNext={handleNext} />)}
    //             </Box>
    //         </div>
    //     </div>
    // )


    return(
        <div className='registration-form-container'>
            <Box sx={{width:'50%' , display:"flex" , alignItems:'center' , justifyContent:'center'}}>
                <img style={{width:'400px'}} src='\images\login_page.jpg' alt='login-page-image'/>
            </Box>
            <Box sx={{width:'50%' , display:'flex' ,
                     flexDirection:"column" , alignItems:'center' , justifyContent:'center' , gap:'60px'}}>
                <Box>
                    <img className='company-logo' src='\images\shovelcompany_logo.jpeg' alt='company-logo'/>
                </Box>
                <Box>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label,index)=>(
                            <Step>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
                <Box>
                    {activeStep === 0 && <FirstStep formData={formData} setFormData={setFormData} handleNext={handleNext}/>}
                    {activeStep === 1 && <SecondStep formData={formData} setFormData={setFormData} handleNext={handleNext}/>}
                    {activeStep === 2 && <ThirdStep formData={formData} setFormData={setFormData} handleNext={handleNext}/>}
                    {activeStep === 3 && <FinalStep formData={formData} setFormData={setFormData} handleNext={handleNext} handleSubmitForm={handleSubmitForm}/>}
                </Box>
            </Box>
        </div>
    )
}

export default Register;

