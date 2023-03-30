import img from './errorRed.jpg'
// import img from './errorGreen.png'

// const img1 = 'https://images.pexels.com/photos/1888015/pexels-photo-1888015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
// const img2 = 'https://images.pexels.com/photos/3747132/pexels-photo-3747132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
// const img3 = 'https://www.photostock.com.mx/stock-photo-preview/55983658/1000/02h36104.jpg'


const ErrorMSG = () => {
    return (
        <img style ={{display: 'block', width: "1000px", height: "700px", objectFit: 'contain', margin: '0 auto'}} src ={img} alt="Error"/>
    )
}
export default ErrorMSG;