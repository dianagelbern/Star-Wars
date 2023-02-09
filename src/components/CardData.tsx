import { CardInformation } from "../entities/CardInformation";

interface ICardData{
    cardImage?: string;
    title: string;
    text1: string;
    text2?: string;
    info1?: string;
    info2?: string;
}

export const CardData = (props: ICardData) => {
      // console.log(props.cardImage);

    return (
        <>
                  <div className="card">
                        <img src={props.cardImage!} alt="react logo" style={{ width: '400px', }} />
                        <div className="card_content">
                              <h2 className="card_title">{props.title}</h2>
                              <p className="card_description">{props.info1}{props.text1}</p>
                              <p className="card_description">{props.info2}{props.text2}</p>
                        </div>
                  </div>
            </>
    );
}