/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import cardStyles from './card.module.css';
import CustomDialog from "./customdialog.tsx";


export default function ReactCard({ title = '', description = '', siteUrl = '', imageTitle = '', picColor = "green" }) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Card style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(0, 0, 0, 0.4)), url(${picColor}Card.jpg)` }} className={`${cardStyles.customCard} h-[380px] w-72 lg:w-80 lg:h-[400px] mt-10 mb-10 sm:m-10 lg:m-0`}>
            <CardContent className={'flex flex-col w-full h-full'}>
                <div className={`w-full h-[40px] mb-0`}>
                    <h1 className={`mt-0  mb-0`}>{title}</h1>
                </div>
                <div className={`flex w-full h-full justify-start items-start text-start pt-10`}>
                </div>
                <div className={`flex flex-row h-[50px] w-full justify-end`}>
                    <button className={`p-button`} onClick={handleClickOpen}>Read More...</button>
                </div>
            </CardContent>
            <CustomDialog open={open} handleClose={handleClose} title={title} description={description} siteUrl={siteUrl} imageTitle={imageTitle}></CustomDialog>
        </Card>
    );


}