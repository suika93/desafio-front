import React, { useState } from 'react'
import { SituationItem } from '../../components/SituationItem'

const INITIAL_NUMBER_OF_VISIBLE_ITEMS = 2

const itemsToSituationItemComponent = 
    (item, index) => <SituationItem key={index} name={item.name} description={item.description} />

const LoadMoreButton = ({ onClick }) => {
    return (<button onClick={onClick}>Load More</button>)
}

// inspired by Simple Load More/Pagination with React https://codepen.io/grantdotlocal/pen/zReNgE
const SituationsFeed = ({items}) => {
    const [numberOfVisibleItems, setNumberOfVisibleItems] = 
        useState(INITIAL_NUMBER_OF_VISIBLE_ITEMS)

    const loadMore = () => {
        const increasedLength = numberOfVisibleItems + 2
        const newNumberofVisibleItems =
                increasedLength > items.length ? 
                items.length 
                : increasedLength

        setNumberOfVisibleItems(newNumberofVisibleItems)
    }

    return (<React.Fragment>
        {items.slice(0, numberOfVisibleItems).map(itemsToSituationItemComponent)}
        {items.length > numberOfVisibleItems && <LoadMoreButton onClick={loadMore} />}
        <p>( Mostrando {numberOfVisibleItems} de {items.length})</p>
    </React.Fragment>)
}

export { SituationsFeed }