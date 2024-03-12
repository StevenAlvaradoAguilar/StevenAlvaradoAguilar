import "./imageCards.css";

const BackEndCard = () => {
    const images = [
        { src: "https://skillicons.dev/icons?i=dotnet&perline=1", alt: ".Net" },
        { src: "https://skillicons.dev/icons?i=nodejs&perline=1", alt: "NodeJs" },
        { src: "https://skillicons.dev/icons?i=firebase&perline=1", alt: "Firebase" },
        { src: "https://skillicons.dev/icons?i=docker&perline=1", alt: "Docker" },
        { src: "https://skillicons.dev/icons?i=mysql&perline=1", alt: "MySQL" },
        { src: "https://skillicons.dev/icons?i=graphql&perline=1", alt: "GraphQL" },
        { src: "https://skillicons.dev/icons?i=sqlite&perline=1", alt: "SQLite" },
        { src: "https://skillicons.dev/icons?i=mongodb&perline=1", alt: "MongoDB" },
        { src: "https://skillicons.dev/icons?i=django&perline=1", alt: "Django" },
        { src: "https://skillicons.dev/icons?i=flask&perline=1", alt: "Flask" },
    ];

    const firstSetOfImages = images.slice(0, 10);
    const secondSetOfImages = images.slice(10);

    return (
        <>
            {/* Renderiza el primer conjunto de imágenes */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {firstSetOfImages.map((image, index) => (
                    <div key={index} style={{ position: 'relative', marginRight: '20px', marginBottom: '20px' }}>
                        <div style={{ position: 'relative' }}>
                            <img
                                src={image.src}
                                loading="lazy"
                                width={80}
                                alt={image.alt}
                                className="image"
                            />
                            <p
                                className="p"
                                style={{ position: 'relative', bottom: '0', width: '100%', textAlign: 'center', background: 'rgba(0, 0, 0, 0.5)', padding: '1px 0', margin: '0', color: 'white' }}
                            >{image.alt}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Renderiza el segundo conjunto de imágenes si existen */}
            {secondSetOfImages.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {secondSetOfImages.map((image, index) => (
                        <div key={index} style={{ position: 'relative', marginRight: '20px', marginBottom: '20px' }}>
                            <div style={{ position: 'relative' }}>
                                <img
                                    src={image.src}
                                    loading="lazy"
                                    width={80}
                                    alt={image.alt}
                                    className="image"
                                />
                                <p 
                                    className="p"
                                    style={{ position: 'relative', bottom: '0', width: '100%', textAlign: 'center', background: 'rgba(0, 0, 0, 0.5)', padding: '1px 0', margin: '0', color: 'white' }}
                                >{image.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default BackEndCard