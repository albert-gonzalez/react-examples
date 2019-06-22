import React from 'react';
import Hero from '../../components/hero/hero';
import Button from '../../containers/button/button';
import Section from '../../components/section/section';
import ModalContainer from '../../containers/modal/modal';

const ModalPage = ({ showModal }) => {
  return (
    <div>
      <Hero>
        Modal examples
        <span className="emoji" role="img" aria-label="page">
          📄
        </span>
      </Hero>
      <Section>
        <h2 className="title is-4">Modal with text only</h2>
        <div className="columns">
          <div className="column">
            <label className="label">Click the button:</label>
            <Button
              instance="modalButton"
              className="is-primary"
              action={() =>
                showModal({
                  instance: 'modal',
                  body: <p>This is a body</p>
                })
              }
            >
              Open Modal
            </Button>
          </div>
        </div>
        <hr />
        <h2 className="title is-4">Modal with title and text</h2>
        <div className="columns">
          <div className="column">
            <label className="label">Click the button:</label>
            <Button
              instance="modalButton"
              className="is-warning"
              action={() =>
                showModal({
                  instance: 'modal',
                  title: 'Example Title',
                  body: <p>This is a body</p>
                })
              }
            >
              Open Modal with title
            </Button>
          </div>
        </div>
        <hr />
      </Section>
      <ModalContainer instance="modal" />
    </div>
  );
};
export default ModalPage;
