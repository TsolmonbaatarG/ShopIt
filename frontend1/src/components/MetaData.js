import React from 'react'
import { Helmet } from 'react-helmet'

const MetaData = ({ title }) => {
    return (
        <Helmet>
            <title>{`${title} - Цемент Шохой ТӨХК`}</title>
        </Helmet>
    )
}

export default MetaData
