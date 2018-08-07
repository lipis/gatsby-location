import React from 'react'
import Layout from '../components/layout'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      limit: this.getHash(),
    }
  }

  getHash() {
    return parseInt(this.props.location.hash.slice(1)) || 4
  }

  render() {
    console.log('location', this.props.location)
    return (
      <Layout>
        <h1>Limit {this.state.limit}</h1>
      </Layout>
    )
  }
}

export default IndexPage
