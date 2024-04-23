import React, { useState } from 'react';
import { Avatar, Box, Button, Chip, Divider, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {v4 as uuidV4} from 'uuid';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import axios from 'axios';

const ChatAI = () => {
    const [input,setInput]=useState('');
    const [questions,setQuestions]=useState([]);
    const [conversation,setConversation]=useState([]);
    //console.log(conversation);

    const answer='Is Pune bigger than Mumbai? When it is about the total size comparison of the two cities, Pune is bigger. The total area of Mumbai is around 603.4 square kilometers whereas that of Pune is calculated to be 729 square kilometers approximately';

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await axios.post('https://b46e-34-75-181-87.ngrok-free.app/ask',{input});
            const botResponse=response.data;
            console.log(botResponse);
        }catch(error){
            console.log(error)
        }

        const newConvo={
            id:uuidV4(),
            content:input,
            role:'user',
            userName:'You'
        }
        setConversation([...conversation,newConvo]);
        setQuestions([...questions,newConvo]);
        setInput('');
    }

    const handleQuestionDelete=(questionID)=>{
        const updatedQuestions=questions.filter((question)=>question.id !== questionID)
        setQuestions(updatedQuestions)

        const updatedConversation=conversation.filter((convo) => convo.id !== questionID)
        setConversation(updatedConversation)
    }

    const handleQuestionClick=(questionId)=>{
        //console.log(questionId);
        const element=document.getElementById(`conversation-${questionId}`);
        //console.log('Selected Element : ',element)
        if(element){
          element.scrollIntoView({behavior:'smooth'})
        }
    }

    return (
        <div style={{ display: 'flex', gap:'10px' ,width: '94%', margin: '80px' , bgcolor:'goldenrod' , height:"40vh"}}>
            <Box sx={{ width: '20%', height: '88vh' , padding:'10px 0px', bgcolor:'azure' , display:'flex' , flexDirection:'column' , alignItems:'center' , borderRadius:"10px"}}>
                <Box sx={{marginTop:'10px'}}>
                    <Typography variant='h5' sx={{fontWeight:'600'}}>Chat History</Typography>
                </Box>
                <Box sx={{width:'90%' , display:"flex", flexDirection:'column' , alignItems:'center' ,height:'400px' , overflow:'auto' , scrollbarWidth:'none' , marginTop:'5px'}}>
                    {questions.map(({id,content})=>(
                        <>
                        <Chip id={id} onClick={()=>handleQuestionClick(id)} key={id} sx={{ cursor:'pointer' , width:'200px' , bgcolor:'whitesmoke' , fontWeight:'600' , fontSize:'15px' ,display:'flex' , justifyContent:'space-between' , margin:'10px 0px' , padding:'20px 0px'}} avatar={<Avatar> <RemoveCircleIcon onClick={()=>handleQuestionDelete(id)}/> </Avatar>} label={content}/>
                        {/* console.log(id) */}
                        </>
                    ))}
                </Box>
            </Box>
            <Box sx={{ width: '80%', bgcolor:'azure' , height: '88vh',padding:'10px 0px' , display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
                <Box sx={{display:'flex' , width:'95%' , justifyContent:'space-between' , alignItems:'center'}}>
                    <Typography variant='h5' sx={{ fontWeight: '600' }}>Claim Assistant</Typography>
                    <Button>Export</Button>
                </Box>
                <Box sx={{ width: '95%', height: "550px" , overflow:'auto' , scrollbarWidth:'none'}}>
                    {conversation.map((item)=>(
                        <Box key={item.id} id={item.id}  sx={{display:'flex' , flexDirection:'column' , gap:1 , margin:"10px 0px"}}>
                            <Box sx={{display:"flex" , alignItems:'center' , gap:1}}>
                                <Avatar>Y</Avatar>
                                <Typography>{item.content}</Typography>
                            </Box>
                            <span id={`conversation-${item.id}`}></span>
                            <Box>
                                <Avatar>S</Avatar>
                                <Typography sx={{margin:"10px 15px"}}>{answer}</Typography>
                            </Box>
                            <Divider/>
                            {/* console.log(item.id) */}
                        </Box>
                    ))}
                </Box>
                <form onSubmit={handleSubmit} style={{width:"100%" , display:"flex" , justifyContent:'center'}}>
                    <TextField value={input} onChange={(e)=>setInput(e.target.value)} sx={{width:'80%'}} placeholder='Type and press enter' InputProps={{endAdornment: (<InputAdornment position="end"> <IconButton type='submit'><SendIcon onClick={handleSubmit} sx={{cursor:'pointer'}}/></IconButton></InputAdornment>),}}/>
                </form>
            </Box>
        </div>
    )
}

export default ChatAI;