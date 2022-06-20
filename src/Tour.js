import React from 'react';

function Tour({ Tour, removeTour, handleShow, handleHide}) {
    return (
        <div>
            <img src={Tour.image} alt='img__tour'></img>
            <footer>
                <div className='tour-info'>
                    <h4>{Tour.name}</h4>
                    <h4 className='tour-price'>{Tour.price}</h4>
                </div>
                <div>
                    <p  className='text-info hide'>
                        {Tour.info}
                    </p>
                    <button className='btn-show' onClick={() => handleShow()} >Read More</button>
                    <button className='btn-hide ' onClick={() => handleHide()} >Show Less</button>
                </div>
                <button className='delete-btn'  onClick={() => removeTour(Tour.id)}>Not interested</button>
            </footer>
        </div>
    );
}

export default Tour;