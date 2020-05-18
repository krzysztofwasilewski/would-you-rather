import React from 'react'
import PropTypes from 'prop-types'

export const Page404 = ({ location }) => <h1 style={{ marginTop: 200 }}>{`404: Page  ${location.pathname} not found!`}</h1>;

Page404.propTypes = {
    location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired
}