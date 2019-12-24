import eventBusService from "../service/eventBusService.js";
export default class ModalDialog extends React.Component {
  eventKiller = null;
  timeout = null;
  state = { display: false, type: null };

  componentDidMount() {
    this.eventKiller = eventBusService.on("toggleModal", type => {
      clearTimeout(this.timeout);
      this.setState(prevState => ({ display: !prevState.display, type }));
      this.timeout = setTimeout(() => {
        this.setState({ display: false, type: null });
      }, 3000);
    });
  }
  exitModal = () => {
    this.setState({ display: false, type: null });
  };

  componentWillUnmount() {
    this.eventKiller && this.eventKiller();
  }

  render() {
    const { display, type } = this.state;
    if (!display) return null;
    if (type === "failed") {
      return (
        <div className="modal">
          <div className="modalBody modalError">
            <div className="flex">
              <h3 className="error">Error</h3>
              <a onClick={this.exitModal}>X</a>
            </div>
            <h4>Cannot add book</h4>
          </div>
        </div>
      );
    } else if (type === "success") {
      return (
        <div className="modal modalSuccess">
          <div className="modalBody modalSuccess">
            <div className="flex">
              <h3 className="success">Success</h3>
              <a onClick={this.exitModal}>X</a>
            </div>
            <h4>Book has been added</h4>
          </div>
        </div>
      );
    }
  }
}
