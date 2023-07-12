import Accordion from 'src/core/components/accordion/accordion';
import classes from './demo.module.scss';

const AccordionDemo = () => {
  return (
    <div>
      <h1>Accordion</h1>

      <div>
        <div className={classes['bs-demo-bookmark']} id="example"></div>
        <h4>
          Example <a href="#example">#</a>
        </h4>
        <Accordion id="accordionExample" className="w-100">
          <Accordion.Item buttonContent="Accordion Item #1" headerComponent="h6">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin
            adds the appropriate classes that we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
            CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
            <code>.accordion-body</code>, though the transition does limit overflow.
          </Accordion.Item>
          <Accordion.Item buttonContent="Accordion Item #2" headerComponent="h6">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin
            adds the appropriate classes that we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
            CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
            <code>.accordion-body</code>, though the transition does limit overflow.
          </Accordion.Item>{' '}
          <Accordion.Item buttonContent="Accordion Item #3" headerComponent="h6">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin
            adds the appropriate classes that we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
            CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
            <code>.accordion-body</code>, though the transition does limit overflow.
          </Accordion.Item>
        </Accordion>
      </div>

      <div>
        <div className={classes['bs-demo-bookmark']} id="flush"></div>
        <h4>
          Flush <a href="#flush">#</a>
        </h4>
        <h6>Remove default border background</h6>
        <Accordion flush id="accordionFlush" className="w-100">
          <Accordion.Item buttonContent="Accordion Item #1" headerComponent="h6">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin
            adds the appropriate classes that we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
            CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
            <code>.accordion-body</code>, though the transition does limit overflow.
          </Accordion.Item>
          <Accordion.Item buttonContent="Accordion Item #2" headerComponent="h6">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin
            adds the appropriate classes that we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
            CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
            <code>.accordion-body</code>, though the transition does limit overflow.
          </Accordion.Item>{' '}
          <Accordion.Item buttonContent="Accordion Item #3" headerComponent="h6">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin
            adds the appropriate classes that we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
            CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
            <code>.accordion-body</code>, though the transition does limit overflow.
          </Accordion.Item>
        </Accordion>
      </div>

      <div>
        <div className={classes['bs-demo-bookmark']} id="away-opens"></div>
        <h4>
          Always opens <a href="#away-opens">#</a>
        </h4>
        <h6>Make accordion items stay open when another item is opened.</h6>
        <Accordion alwayOpen id="accordionExampleFlush" className="w-100">
          <Accordion.Item buttonContent="Accordion Item #1" headerComponent="h6">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin
            adds the appropriate classes that we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
            CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
            <code>.accordion-body</code>, though the transition does limit overflow.
          </Accordion.Item>
          <Accordion.Item buttonContent="Accordion Item #2" headerComponent="h6">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin
            adds the appropriate classes that we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
            CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
            <code>.accordion-body</code>, though the transition does limit overflow.
          </Accordion.Item>{' '}
          <Accordion.Item buttonContent="Accordion Item #3" headerComponent="h6">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin
            adds the appropriate classes that we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
            CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
            <code>.accordion-body</code>, though the transition does limit overflow.
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default AccordionDemo;
