import React from 'react';

class ReloadButton extends React.Component {
  handleReload = () => {
    window.location.reload();
  };

  render() {
    return (
      <div>
        <button onClick={this.handleReload}>Reload Page</button>
      </div>
    );
  }
}

export default ReloadButton;
