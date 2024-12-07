import listviewStyles from './listview.module.css';
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { InputText } from 'primereact/inputtext';

export default function ListView({cards}) {
    const [cardsState, setCards] = useState(cards);
    const [filteredCardsState, setFilteredCards] = useState(cards);
    const [searchString, newSearchString] = useState('');
    
    function UpdateSearch(searchString) {
        newSearchString(searchString.target.value);
        if (searchString.target.value.length > 0 ) {
            setFilteredCards(cards.filter((card) =>
                card.Name.toLowerCase().includes(searchString.target.value.toLowerCase())
            ));
        }
        else {
            setFilteredCards(cards);
        }
    }
    
    function UpdateCardState(updatedId: number) {
        setCards(cards.map((i) =>
            i.isActive = false,
        ));
        setCards(cards.map((card, i) =>
            i === updatedId ? { ...card, isActive: card.isActive = true } : card
        ));
        activeCard = cardsState.find((card) => card.isActive);
    }
    let activeCard = cardsState.find((card) => card.isActive);
    

    function NavigatePage(id: string) {
        setTimeout(() => {
            window.location.href = `/info/${id}`;
        }, 200);
    }
    
    return (
        <>
            <div className={`hidden md:flex flex-row h-full w-full mt-24 justify-around items-center`}>
                <div className={`flex flex-col h-full w-fit`}>
                    <InputText value={searchString} onChange={(change) => UpdateSearch(change)} className={`hidden md:flex h-[30px] w-[230px] mb-3`} placeholder="Search..." />
                    <div style={{ backgroundColor: '#252525' }} className={`flex flex-col rounded-md h-[260px] w-[230px] overflow-y-scroll`}>
                        {filteredCardsState.map((card, index) => (
                            <div key={index} className={`flex flex-col h-[40px] w-full pl-3 pr-3 justify-center items-start rounded-lg cursor-pointer ${card.isActive ? listviewStyles.activeCard : listviewStyles.inactiveCard}`} onClick={() => UpdateCardState(parseInt(card.id) - 1)}>
                                <p className={`m-0`}>{card.Name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <Card className={`w-72 h-[350px] md:h-[450px] md:w-[420px] hover:z-10 hover:scale-110 m-10 sm:m-0 shadow-inner ${activeCard.isActive ? listviewStyles.fadeInItem : ''}`}>
                    <CardContent className={`flex flex-col w-full h-full`}>
                        <div className={`w-full h-[40px] mb-0`}>
                            <h1 className={`mt-0  mb-0`}>{activeCard.Name}</h1>
                        </div>
                        <div className={`flex flex-col w-full h-full justify-start items-start text-start pt-10`}>
                            <p>{activeCard.Description}</p>
                            <p>{activeCard.DescriptionPartTwo}</p>
                        </div>
                        <div className={`flex flex-row w-full h-[50px]`}>
                            <button className={`p-button`} onClick={() => NavigatePage(activeCard.id.toString())}>Read More...</button>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className={`flex md:hidden h-[30px] w-full mt-5 mb-20 justify-center items-center`}>
                <InputText value={searchString} onChange={(change) => UpdateSearch(change)} className={`flex h-full w-1/2`} placeholder="Search..." />
            </div>
            <div className={`flex md:hidden flex-row h-full w-full justify-around items-center flex-wrap p-0 m-0`}>
                {filteredCardsState.map((card) => {
                    return <Card className={`w-72 h-[350px] m-10 m-3`}>
                        <CardContent className={'flex flex-col w-full h-full'}>
                            <div className={`w-full h-[40px] mb-0`}>
                                <h1 className={`mt-0  mb-0`}>{card.Name}</h1>
                            </div>
                            <div className={`flex w-full h-full justify-start items-start text-start pt-10`}>
                                <p>{card.Description}</p>
                            </div>
                            <div className={`flex flex-row w-full h-[50px]`}>
                                <button className={`p-button`} onClick={() => NavigatePage(card.id.toString())}>Read More...</button>
                            </div>
                        </CardContent>
                    </Card>
                })}
            </div>
        </>
    )
}