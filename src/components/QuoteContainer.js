import { connect } from 'react-redux'
import Quote from './Quote'

const mapStateToProps = (state) => {
  return {
    quote: state.quote,
    author: state.quote_author
  }
}

const QuoteContainer = connect(mapStateToProps)(Quote)

export default QuoteContainer
