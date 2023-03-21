import React from 'react';
import ShopItem from './ShopItem';
import { useGlobalContext } from './context';

const ShopContainer = () => {
    const { shop, total, clearList } = useGlobalContext()
    if (shop.length === 0) {
        return (
            <section className='shop'>
                {/* shop header */}
                <header>
                    <h2>your bag</h2>
                    <h4 className='empty-list'>is currently empty</h4>
                </header>
            </section>
        )
    }
    return (
        <section className='shop'>
            {/* shop header */}
            <header>
                <h2>your bag</h2>
            </header>
            {/* shop items */}
            <div>
                {shop.map((item) => {
                    return <ShopItem key={item.id} {...item} />
                })}
            </div>
            {/* shop footer */}
            <footer>
                <hr />
                <div className='shop-total'>
                    <h4>
                        total <span>${total}</span>
                    </h4>
                </div>
                <button className='btn clear-btn' onClick={clearList}>
                    clear list
                </button>
            </footer>
        </section>
    );
}

export default ShopContainer;
