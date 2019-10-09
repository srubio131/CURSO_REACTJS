import { connect } from 'react-redux'
import { CounterComponent } from '../components/Counter'

const mapStateToProps = (state) => {
  return { counter: state.counter }
}
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
  }
}

const createConnection = connect(
  mapStateToProps,
  mapDispatchToProps
)

const CounterContainerRedux = createConnection(CounterComponent)

export default CounterContainerRedux