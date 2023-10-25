import { Box, Paper } from "@mui/material";
import React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Backdrop from '@mui/material/Backdrop';
import Alert from '@mui/material/Alert';


export function OutOfOffice() {


    const [open, setOpen] = React.useState(true);
    //const open = true;

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: 2 }}
            open={open}
            onClick={() =>{setOpen(false)}}>

            <Alert onClose={() => {setOpen(false)}}>臨時有事，約3點回來</Alert>
        </Backdrop>

    )
}


export default function OfficeInformationSticker({ imgLink, title, name, officeHour, email, phone, office }) {
    return (
        <>
            <Paper elevation={3} sx={{p: 2, maxWidth: "500px", height: "700px"}}>
                <OfficeInfoHead imgLink={imgLink} name={name} title={title} email={email} phone={phone} />
            </Paper>
        </>
    )
}
function OfficeInfoHead({ name, title, imgLink, email, phone }) {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar alt={name} src={imgLink} sx={{ width: 100, height: 100 }} />
            <Name_Email_Phone name={name} title={title} email={email} phone={phone} />
        </Stack>
    )
}


function Name_Email_Phone({ name, title, email, phone }) {
    return (
        <Stack direction="column" spacing={0}>
            <Typography variant="h4">
                {name} {title}
            </Typography>
            <Typography variant="body1">
                <EmailIcon /> {email}
            </Typography>
            <Typography variant="body1">
                <PhoneIcon /> {phone}
            </Typography>
        </Stack>
    )
}