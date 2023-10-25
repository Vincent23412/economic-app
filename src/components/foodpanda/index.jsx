import { Box, Stack, Typography } from "@mui/material"

export default function FoodPanda_Shop({imgLink, title, foodType, fee}) {
    return (
        <Box sx={{ width: "215px", height: "219px", border: "1px #000000 solid", padding: "3px" }}>
            <Stack direction="column" spacing={1}>
                <FoodpandaImage imgLink={imgLink} />
                <FoodpandaContent
                    title={title}
                    foodType={foodType}
                    fee={fee}
                />
            </Stack>
        </Box>
    )
}

function FoodpandaContent({ title, foodType, fee }) {
    return (
        <Stack direction="column" >
            <Typography fontSize="15px" fontWeight="bolder" >
                {title}
            </Typography>
            <Typography fontSize="12px" color="#bababa">
                $$$, {foodType}
            </Typography>
            <Stack direction="row" mt="8px">
                <Typography fontSize="12px" fontWeight="bolder" color="#767676">
                    $ {fee}外送服務費|
                </Typography>
                <Typography fontSize="12px" fontWeight="bolder" color="#ff2a85">
                    免外送服務費
                </Typography>
            </Stack>
        </Stack>
    )
}

function FoodpandaImage({ imgLink }) {
    return (
        <Box sx={{ height: "140px" }}>
            <img src={imgLink} alt="image" width="100%" height="100%" />
        </Box>
    )
}
