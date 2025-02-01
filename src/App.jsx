import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Section from './components/Section/Section';
import Container from './components/Container/Container';
import Todos from './tabs/Todos';
import Photos from './tabs/Photos';

export const App = () => {
  return (
    <Section>
      <Container>
        <Tabs>
          <TabList>
            <Tab>Photos</Tab>
            <Tab>Todos</Tab>
          </TabList>

          <TabPanel>
            <Photos />
          </TabPanel>
          <TabPanel>
            <Todos />
          </TabPanel>
        </Tabs>
      </Container>
    </Section>
  );
};
