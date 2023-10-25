import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function OfficeInformation({imgLink, name ,officeHour, email, phone, office}) {
    return (
        <>
          <Stack direction="row" spacing={2} >
            <ImagePanel_fixedContent imgLink={imgLink} name={name}/>
            <InfoPanel officeHour={officeHour} email={email}
                phone={phone}
                office={office}/>
          </Stack>
        </>
      );
}


function ImagePanel_fixedContent({imgLink, name}) {
    return (
        <Stack direction="column" spacing={2}>
            <Box sx={{ width: "300px", height: "100%" }}>
                <img src={imgLink}
                    alt="image" width="100%" />
            </Box>
            <Typography variant="h6">
                {name} 教授
            </Typography>
        </Stack>
    );
}



function InfoPanel({officeHour, email, phone, office}) {
    return (
        <>
            <Stack direction="column" spacing={2}>
                <InfoPanel_variableContent title="Office Hours" content={officeHour} />
                <InfoPanel_variableContent title="Email" content={email} />
                <InfoPanel_variableContent title="Phone" content={phone} />
                <InfoPanel_variableContent title="Office" content={office} />
            </Stack>
        </>
    )
}

function InfoPanel_variableContent({ title, content }) {
    return (
        <Stack direction="column" spacing={2} sx={{alignItems: 'center'}}>
            <Typography variant="h6">
                {title}
            </Typography>
            <Typography variant="body1">
                {content}
            </Typography>
        </Stack>
    )
}