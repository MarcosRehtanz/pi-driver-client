

export const ErrorSection = ({ message, url }) => {

    const style = {
        errorSection: {
            height: '500px',
            display:'flex',
            // borderRadius:'50px',
            // borderWidth: '2px',
            // borderStyle: 'solid',

            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            gap:'40px',
            backgroundColor:'#00000055',
        },
        image: {
            width: '70%'
        }
    }

    return (
        <section style={style.errorSection} className="Error-section">
            <h1>{message}</h1>
            {url
                ? <img style={style.image} src={url} />
                : ''
            }
        </section>
    )

}