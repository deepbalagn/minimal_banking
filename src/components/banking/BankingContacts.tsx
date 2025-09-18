import {  CardHeader, Box, Avatar, ListItemText, Tooltip, IconButton, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import { Icon } from "@iconify/react";
import { BankingContactsData } from "../../data/BankingContactsData";

export function BankingContacts(){
    return (<>
       <Paper sx={{ fontFamily: "Public Sans Variable" , borderRadius:4}}>
          <CardHeader
            title={"Contacts"}
            subheader={"you have 122 contacts"}
            action={
              <Button
                size="small"
                color="inherit"
                endIcon={<Icon icon="eva:arrow-ios-forward-fill" width={18} />}
                sx={{fontSize:"18px" , textTransform:'none'}}
              >
                View all
              </Button>
            }
          />

          <Box sx={{ p: 3 }}>
            {BankingContactsData.slice(0,5).map((data, index) => (
              <Box
                key={index}
                sx={[{ gap: 2, display: "flex", alignItems: "center" }]}
              >
                <Avatar src={data.URL} />

                <ListItemText primary={data.Username} secondary={data.Email} />

                <Tooltip title="Quick transfer">
                  <IconButton>
                    <Icon icon="solar:transfer-horizontal-bold-duotone" />
                  </IconButton>
                </Tooltip>
              </Box>
            ))}
          </Box>
        </Paper>
    </>)
}