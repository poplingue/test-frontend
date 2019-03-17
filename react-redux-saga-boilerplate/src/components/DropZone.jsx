import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import rgba from 'polished/lib/color/rgba';
import { appColor, headerHeight } from 'modules/theme';

import { logOut } from 'actions';

import { Container, utils } from 'styled-minimal';
import Icon from 'components/Icon';
import Logo from 'components/Logo';

const { responsive, spacer } = utils;

const HeaderWrapper = styled.header`
  background-color: ${rgba(appColor, 0.9)};
  height: ${headerHeight}px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 200;

  &:before {
    background-color: ${appColor};
    bottom: 0;
    content: '';
    height: 0.2rem;
    left: 0;
    position: absolute;
    right: 0;
  }
`;

const HeaderContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-between;
  padding-bottom: ${spacer(2)};
  padding-top: ${spacer(2)};
`;

const Logout = styled.button`
  align-items: center;
  color: #333;
  display: flex;
  font-size: 1.3rem;
  padding: ${spacer(2)};

  ${responsive({ lg: 'font-size: 1.6rem;' })}; /* stylelint-disable-line */

  &.active {
    color: #000;
  }

  span {
    display: inline-block;
    margin-right: 0.4rem;
    text-transform: uppercase;
  }
`;

export default class DropZone extends React.PureComponent {
  static propTypes = {
    updateFileName: PropTypes.func.isRequired,
  };

  fileUploaded = () => {
    const { updateFileName } = this.props;
    updateFileName(this.fileUpload.files[0].name);
  };

  render() {
    return (
      <div>
        <input type="file" ref={ref => (this.fileUpload = ref)} onChange={this.fileUploaded} />
      </div>
    );
  }
}
