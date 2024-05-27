export const Estate = (props) => {

    const formattedPrice = props.price.toLocaleString('cs-CZ');

    return (
                
        <section>
        <h2 className="title">{props.title}</h2>
        <p className="text">{props.text}</p>
        
        <p className="price">
        <span className="bold">Cena:</span> {formattedPrice} Kč
        </p>

        <p className="city">
        <span className="bold">Město:</span> {props.city}
        </p>

        <p className="contact-name">
        <span className="bold">Kontaktní osoba:</span> {props.name}
        </p>

        <p className="contact-email">
        <span className="bold">E-mail:</span> {props.email}
        </p>

        <p className="contact-phone">
        <span className="bold">Telefon:</span> {props.phone}
        </p>

        <img src={props.photo} alt="obrazek domu" />
        </section>
        
    )
}


