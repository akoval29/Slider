const SliderBlock = ({result, moveDot, current, length}) => {
    return (
        <>
            {result.map((obj, idx) => {
                return (
                    <div
                        className={idx === current ? 'slide active' : 'slide'}
                        key={idx} >
                            
                        <a 
                            className='pexels' 
                            href="https://www.pexels.com">
                            Photos provided by Pexels
                        </a>

                        {idx === current && (
                            <img
                            className='image'
                            id={obj.id}
                            src={obj.src.landscape}
                            alt={`PhotoID: ${obj.id}`}
                            />
                        )}

                        <p className='photographer'>
                            {`Photographer: ${obj.photographer}`}
                        </p>

                        <div className="container-dots">
                            {Array.from({length: length}).map((item, index) => (
                            <div
                                key={index} 
                                onClick={() => moveDot(index)}
                                className={current === index ? "dot dotActive" : "dot"}
                            ></div>
                            ))}
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default SliderBlock