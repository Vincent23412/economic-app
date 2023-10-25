import { Box, Stack, Typography } from "@mui/material"
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

export default function Ubereats_Store({imgLink, title, fee, deliveryTime}) {
    return (
        <Box sx={{ width: "215px", height: "211px", border: "1px #000000 solid", padding: "8px 5px" }}>
            <Stack direction="column" spacing={1.5}>
                <UbereatsImage imgLink={imgLink} />
                <UbereatsContent
                    title={title}
                    fee={fee}
                    deliveryTime={deliveryTime}
                />
            </Stack>
        </Box>
    )
}

function UbereatsContent({ title, fee, deliveryTime }) {
    return (
        <Stack direction="column" >
            <Typography fontSize="20px" fontWeight="bolder" color="#000000">
                {title}
            </Typography>
            <Stack direction="row" alignItems="center">
                <PanoramaFishEyeIcon style={{ width: "16px", height: "16px", marginRight: "1px" }} />
                <Typography fontSize="14px" color="#000000">
                    ·{fee}TWD Fee·
                </Typography>
                <Typography fontSize="14px" color="#757575">
                    {deliveryTime} min
                </Typography>
            </Stack>
        </Stack>
    )
}

function UbereatsImage({ imgLink }) {
    return (
        <Box sx={{ height: "140px" }}>
            <img src={imgLink} alt="image" width="100%" height="100%" style={{ borderRadius: "20px" }} />
        </Box>
    )
}
