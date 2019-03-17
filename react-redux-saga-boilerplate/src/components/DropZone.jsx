import React from 'react';
import PropTypes from 'prop-types';

import { sendFile } from 'actions/file';
import { connect } from 'react-redux';

class DropZone extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    file: PropTypes.object,
    updateFileName: PropTypes.func.isRequired,
  };

  fileUploaded = () => {
    const { updateFileName } = this.props;
    updateFileName(this.fileUpload.files[0].name);
  };

  sendFile = () => {
    const { dispatch } = this.props;
    dispatch(sendFile(this.fileUpload.files[0]));
  };

  render() {
    return (
      <div>
        <input type="file" ref={ref => (this.fileUpload = ref)} onChange={this.fileUploaded} />
        <input type="button" value="send" onClick={this.sendFile} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { file: state.file };
}
export default connect(mapStateToProps)(DropZone);
