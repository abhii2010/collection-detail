import * as React from 'react';
import Typography from '@mui/material/Typography';
import VerifiedIcon from '@mui/icons-material/Verified';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import FlagIcon from '@mui/icons-material/Flag';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';

export default function ProfileDetail() {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '51px', marginBottom: '30px', position: 'relative', bottom: '106px' }}>
            <div style={{ display: 'flex', marginTop:'5px' }}>
                <Typography style={{ fontWeight: 'bold', fontSize: '25px' }} gutterBottom>
                    Azuki
                </Typography>
                <VerifiedIcon color="primary" />
                <div style={{ marginLeft: 'auto' }}>
                    <IconButton>
                        <LanguageIcon />
                    </IconButton>
                    <IconButton>
                        <TwitterIcon />
                    </IconButton>
                    <IconButton>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton onClick={handleClick}>
                        <MoreHorizIcon />
                    </IconButton>
                </div>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}

                >
                    <Typography sx={{ padding: '10px 12px 8px 10px' }} variant="h6" gutterBottom>
                        <FlagIcon /> Report
                    </Typography>
                </Popover>
            </div>
            <div style={{ display: 'flex', marginTop:'5px' }}>
                <Typography style={{ fontSize: '16px' }} gutterBottom>
                    By <label style={{ fontWeight: 'bold' }}>TeamAzuki</label>
                </Typography>
                <VerifiedIcon color="primary" />
            </div>
            <div style={{ display: 'flex', width: '50%', justifyContent: 'space-between', marginTop:'5px' }}>
                <Typography style={{ fontSize: '16px' }} gutterBottom>
                    Items <label style={{ fontWeight: 'bold' }}>10,000</label>
                </Typography>
                <Typography style={{ fontSize: '16px' }} gutterBottom>
                    Created <label style={{ fontWeight: 'bold' }}>Jan 2022</label>
                </Typography>
                <Typography style={{ fontSize: '16px' }} gutterBottom>
                    Creator fee <label style={{ fontWeight: 'bold' }}>5%</label>
                </Typography>
                <Typography style={{ fontSize: '16px' }} gutterBottom>
                    Chain <label style={{ fontWeight: 'bold' }}>Ethereum</label>
                </Typography>
            </div>
            <div style={{ display: 'flex', width: '50%', textAlign: 'left', marginTop:'5px' }}>
                <Typography style={{ fontSize: '16px' }} gutterBottom>
                    Take the red bean to join the garden. View the collection at azuki.com/gallery.
                </Typography>
            </div>
            <div style={{ display: 'flex', width: '60%', justifyContent: 'space-between', marginTop:'15px' }}>
                <div>
                    <Typography style={{ fontSize: '18px', fontWeight:'bold' }} gutterBottom>
                        268,082 ETH
                    </Typography>
                    <Typography style={{ fontSize: '16px', textAlign: 'left' }} gutterBottom>
                        total volume
                    </Typography>
                </div>
                <div>
                    <Typography style={{ fontSize: '18px', fontWeight:'bold' }} gutterBottom>
                        9.5 ETH
                    </Typography>
                    <Typography style={{ fontSize: '16px', textAlign: 'left' }} gutterBottom>
                        floor price
                    </Typography>
                </div>
                <div>
                    <Typography style={{ fontSize: '18px', fontWeight:'bold' }} gutterBottom>
                        8.61 ETH
                    </Typography>
                    <Typography style={{ fontSize: '16px', textAlign: 'left' }} gutterBottom>
                        best offer
                    </Typography>
                </div>
                <div>
                    <Typography style={{ fontSize: '18px', fontWeight:'bold' }} gutterBottom>
                        8%
                    </Typography>
                    <Typography style={{ fontSize: '16px', textAlign: 'left' }} gutterBottom>
                        listed
                    </Typography>
                </div>
                <div>
                    <Typography style={{ fontSize: '18px', fontWeight:'bold' }} gutterBottom>
                        4997
                    </Typography>
                    <Typography style={{ fontSize: '16px', textAlign: 'left' }} gutterBottom>
                        owners
                    </Typography>
                </div>
                <div>
                    <Typography style={{ fontSize: '18px', fontWeight:'bold' }} gutterBottom>
                        50%
                    </Typography>
                    <Typography style={{ fontSize: '16px', textAlign: 'left' }} gutterBottom>
                        unique owners
                    </Typography>
                </div>
            </div>
        </div>
    );
}