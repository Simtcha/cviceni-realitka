export const Estate = (props) => {
    return (
        
        <section>
        <h2 className="title">{props.title}</h2>
        <p className="text">{props.text}</p>
        <p className="price">{props.price}</p>
        <p className="city">{props.city}</p>
        <p className="contact-name">{props.name}</p>
        <p className="contact-email">{props.email}</p>
        <p className="contact-phone">{props.phone}</p>
        <img src={props.photo} alt="obrazek domu" />
        </section>
        
    )
}


