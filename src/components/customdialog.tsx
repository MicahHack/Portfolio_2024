/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

export default function CustomDialog({ open, handleClose, title = '', description = '', siteUrl = '', imageTitle = '' }) {

    return (
            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
            <DialogTitle>{title} - {<a href={`https://${siteUrl}`} target="_blank">{siteUrl}</a>}</DialogTitle>
            <DialogContent className={`flex flex-col md:flex-row h-full md:h-[330px] w-full`}>
                    {/* Image */}
                <div className={`flex flex-row w-full md:w-[850px]`}>
                        <img
                            src={imageTitle}
                            style={{ width: '100%', height: '100%', marginBottom: '16px' }}
                        />
                    </div>

                <div className={`flex flex-col h-full w-full text-start pl-3 pr-3`}>
                    <Typography variant="body1">{description}</Typography>
                </div>
                </DialogContent>

                {/* Dialog Actions (Close Button) */}
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
    );
}