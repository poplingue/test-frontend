import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Container, utils } from 'styled-minimal';
import Background from 'components/Background';
import DropZone from 'components/DropZone';
import Logo from 'components/Logo';

const { spacer } = utils;

const HomeContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

const Header = styled.div`
  margin-bottom: ${spacer(3)};
  text-align: center;

  svg {
    width: 20rem;
  }
`;

const Heading = styled.h1`
  color: #fff;
  font-size: 3.5rem;
  line-height: 1.4;
  margin-bottom: ${spacer(3)};
  margin-top: 0;
  text-align: center;

  /* stylelint-disable */
  ${utils.responsive({
    lg: `
      font-size: 4rem;
    `,
  })};
  /* stylelint-enable */
`;

export class Home extends React.PureComponent {
  static propTypes = {
    fileName: PropTypes.string,
  };

  state = {
    fileName: '',
  };

  updateFileName = name => {
    this.setState({
      fileName: name,
    });
  };

  render() {
    const { fileName } = this.state;
    return (
      <Background key="Home" data-testid="HomeWrapper">
        <HomeContainer verticalPadding>
          <Header>
            <Logo />
          </Header>
          <Heading>Drop a file</Heading>
          <section>{fileName && `File uploaded: ${fileName}`}</section>
          <DropZone updateFileName={this.updateFileName} />
        </HomeContainer>
      </Background>
    );
  }
}

function mapStateToProps(state) {
  return { fileName: state.fileName };
}

export default connect(mapStateToProps)(Home);
