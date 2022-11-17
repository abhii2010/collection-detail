import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Filter from './filter';
import List from './list';
import FilterListIcon from '@mui/icons-material/FilterList';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Content() {
    const [tabValue, setTabValue] = React.useState(0);
    const [sortBy, setSortBy] = React.useState('');

    const sortChange = (event: SelectChangeEvent) => {
        setSortBy(event.target.value as string);
    };

    const tabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '51px', position: 'relative', bottom: '106px' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={tabValue} onChange={tabChange} aria-label="Tab">
                    <Tab style={{ fontWeight: 'bold' }} label="Items" {...a11yProps(0)} />
                    <Tab style={{ fontWeight: 'bold' }} label="Analytics" {...a11yProps(1)} />
                    <Tab style={{ fontWeight: 'bold' }} label="Activity" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={tabValue} index={0}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%', alignItems: 'center' }}>
                        <IconButton>
                            <FilterListIcon />
                        </IconButton>
                        <Paper
                            component="form"
                            sx={{ p: '5px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                        >
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search Google Maps"
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                        </Paper>
                        <FormControl sx={{ minWidth: 120 }}>
                            <InputLabel id="select-label">Sort By</InputLabel>
                            <Select
                                labelId="select-label"
                                id="select"
                                value={sortBy}
                                label="Sort By"
                                onChange={sortChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div style={{ display: 'flex', marginTop:'20px', justifyContent: 'space-between' }}>
                        <Filter />
                        <List />
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
                Analytics
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
                Activity
            </TabPanel>
        </div>
    );
}