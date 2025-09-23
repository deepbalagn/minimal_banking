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

type ConfirmTransferDialogProps = {
  open: boolean;
  amount: number | string;
  onClose: () => void;
  id: number;
};

function ConfirmTransferDialog({
  open,
  amount,
  onClose,
  id,
}: ConfirmTransferDialogProps) {
  const contactInfo = BankingContactsData[id];
  return (
    <Dialog open={open} fullWidth maxWidth="xs" onClose={onClose}>
      <DialogTitle>Transfer to</DialogTitle>
      <Box
        sx={{
          px: 3,
          gap: 3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ gap: 2, display: "flex", alignItems: "center" }}>
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

        <TextField
          fullWidth
          multiline
          rows={3}
          placeholder="Write a message..."
        />
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
  const [selectedAvatarIndex, setSelectedAvatarIndex] = useState<number>(2);

  const handleChangeSlider = useCallback(
    (_event: Event, newValue: number | number[]) => {
      setAmount(newValue as number);
    },
    []
  );

  const handleOpenDialog = () => {
    if (selectedAvatarIndex) {
      setOpenDialog(true);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSelectAvatar = (index: number) => {
    setSelectedAvatarIndex(index);
  };

  const handleNextSelection = () => {
    const nextIndex =
      selectedAvatarIndex === (BankingContactsData.length - 4) - 1
        ? 0
        : selectedAvatarIndex + 1;
    setSelectedAvatarIndex(nextIndex);
  };

  const handlePrevSelection = () => {
    const prevIndex =
      selectedAvatarIndex === 0
        ? (BankingContactsData.length - 4) - 1
        : selectedAvatarIndex - 1;
    setSelectedAvatarIndex(prevIndex);
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
              endIcon={<Icon icon="eva:arrow-ios-forward-fill" width={18} />}
              sx={{ mr: -1, textTransform: "none", fontSize: "15px" }}
            >
              View all
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          component="span"
        >
          <IconButton onClick={handlePrevSelection}>
            <Icon
              icon="material-symbols:arrow-left-alt-rounded"
              width="24"
              height="24"
            />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 0.5, sm: 1.8 },
            }}
            component="span"
          >
            {BankingContactsData.slice(0, 5).map((contact, index) => (
              <Box key={contact.Email}>
                <Avatar
                  src={contact.URL}
                  sx={{
                    opacity: selectedAvatarIndex === index ? 1 : 0.3,
                    cursor: "pointer",
                    transition: "opacity 0.3s",
                  }}
                  onClick={() => handleSelectAvatar(index)}
                />
              </Box>
            ))}
          </Box>

          <IconButton onClick={handleNextSelection}>
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
          disabled={amount === 0}
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
        id={selectedAvatarIndex}
      />
    </>
  );
}
