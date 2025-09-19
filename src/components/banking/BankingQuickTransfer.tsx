import {
  Box,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Avatar,
  Slider,
  Dialog,
  DialogActions,
  DialogTitle,
  ListItemText,
  TextField,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useState, useCallback } from "react";
import { BankingContactsData } from "../../data/BankingContactsData";
import type { BankingContactsType } from "../../types/BankingContactsType";

type ConfirmTransferDialogProps = {
  open: boolean;
  amount: number | string;
  onClose: () => void;
  contactInfo: BankingContactsType | null;
};

function ConfirmTransferDialog({
  open,
  amount,
  onClose,
  contactInfo,
}: ConfirmTransferDialogProps) {
  return (
    <Dialog open={open} fullWidth maxWidth="xs" onClose={onClose}>
      <DialogTitle>Transfer to</DialogTitle>

      <Box
        sx={{
          px: 3,
          gap: 3,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
          <Avatar src={contactInfo?.URL} sx={{ width: 48, height: 48 }} />
          <ListItemText
            primary={contactInfo?.Username}
            secondary={contactInfo?.Email}
            slotProps={{
              secondary: { sx: { mt: 0.5 } },
            }}
          />
        </Box>

        <Typography variant="h6" sx={{ textAlign: "center" }}>
          ${amount}
        </Typography>

        <TextField fullWidth multiline rows={3} placeholder="Write a message..." />
      </Box>

      <DialogActions>
        <Button onClick={onClose} sx={{ color: "black" }}>
          Cancel
        </Button>
        <Button
          variant="contained"
          disabled={amount === 0}
          onClick={onClose}
          sx={{ bgcolor: "#1C252E" }}
        >
          Transfer
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export function BankingQuickTransfer() {
  const [amount, setAmount] = useState<string | number>(200);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedContact, setSelectedContact] = useState<BankingContactsType | null>(null);
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>("marjolaine.white94@gmail.com");

  const handleChangeSlider = useCallback(
    (event: Event, newValue: number | number[]) => {
      console.log(event);      
      setAmount(newValue as number);
    },
    []
  );

  const handleOpenDialog = () => {
    if (selectedContact) {
      setOpenDialog(true);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSelectAvatar = (contact: BankingContactsType) => {
    setSelectedContact(contact);
    setSelectedAvatar(contact.Email);
  };

  return (
    <>
      <Box
        sx={{
          py: 2,
          px: 2,
          borderRadius: 5,
          bgcolor: "#F4F6F8",
        }}
      >
        <CardHeader
          title="Quick Transfer"
          sx={{
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingTop: "24px",
            paddingBottom: "0px",
          }}
        />
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="overline"
              sx={{ color: "text.secondary", flexGrow: 1 }}
            >
              Recent
            </Typography>
            <Button
              size="small"
              color="inherit"
              endIcon={
                <Icon icon="eva:arrow-ios-forward-fill" width={18} />
              }
              sx={{ mr: -1, textTransform: 'none', fontSize: '15px' }}
            >
              View all
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          component="span"
        >
          <IconButton>
            <Icon
              icon="material-symbols:arrow-left-alt-rounded"
              width="24"
              height="24"
            />
          </IconButton>

          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "row" ,
              alignItems: "center",
              // flexWrap: "wrap",
              justifyContent: 'center',
              gap:1.8
              // mx:1
            }}
            component="span"
          >
        
              {BankingContactsData.slice(0, 5).map((contact) => (
                <Box
                  key={contact.Email}
                  sx={{  }}
                >
                  <Avatar
                    src={contact.URL}
                    sx={{
                      opacity: selectedAvatar === contact.Email ? 1 : 0.3,
                      cursor: "pointer",
                      transition: "opacity 0.3s",
                    }}
                    onClick={() => handleSelectAvatar(contact)}
                  />
                </Box>
              ))}
          
          </Box>

          <IconButton>
            <Icon
              icon="material-symbols:arrow-right-alt-rounded"
              width="24"
              height="24"
            />
          </IconButton>
        </Box>

        <Typography
          sx={{
            marginLeft: "15px",
            marginTop: "40px",
            color: "text.secondary",
          }}
        >
          Insert Amount
        </Typography>

        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
          component="span"
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              fontSize: "30px",
            }}
          >
            ${amount}
          </Box>
        </Box>

        <Box sx={{ m: 3 }}>
          <Slider
            value={typeof amount === "number" ? amount : 0}
            valueLabelDisplay="auto"
            step={50}
            marks
            min={0}
            max={1000}
            onChange={handleChangeSlider}
            sx={{ color: "green" }}
          />
        </Box>

        <Box
          sx={{
            my: 4,
            mx: 4,
            display: "flex",
            alignItems: "center",
            typography: "subtitle1",
          }}
        >
          <Box component="span" sx={{ flexGrow: 1 }}>
            Your balance
          </Box>
          $34,212
        </Box>

        <Button
          fullWidth
          size="large"
          color="inherit"
          variant="contained"
          disabled={amount === 0 || !selectedContact}
          sx={{
            bgcolor: "black",
            color: "white",
            fontWeight: "600",
          }}
          onClick={handleOpenDialog}
        >
          Transfer now
        </Button>
      </Box>

      <ConfirmTransferDialog
        open={openDialog}
        amount={amount}
        onClose={handleCloseDialog}
        contactInfo={selectedContact}
      />
    </>
  );
}
