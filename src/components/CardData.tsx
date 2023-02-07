import { CardInformation } from "../entities/CardInformation";

interface ICardData{
    cardImage?: string;
    title: string;
    text1: string;
    text2?: string;
}

export const CardData = (props: ICardData) => {
    return (
        <>
                  <div className="card">
                        <img src="https://reactjs.org/logo-og.png" alt="react logo" style={{ width: '400px', }} />
                        <div className="card_content">
                              <h2 className="card_title">{props.title}</h2>
                              <p className="card_description"> {props.text1}</p>
                              <p className="card_description">{props.text2}</p>
                        </div>
                  </div>
            </>
    );
}