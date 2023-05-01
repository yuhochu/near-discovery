import React, { useEffect, useState } from 'react';
import { Widget } from 'near-social-vm';
import { useParams, useLocation } from 'react-router-dom';
import { useQuery } from '../hooks/useQuery';

export default function ViewPage(props) {
  const { widgetSrc } = useParams();
  const query = useQuery();

  const list_tab = query.get('tab');

  const [widgetProps, setWidgetProps] = useState({});

  const src = widgetSrc || props.widgets.default;
  const setWidgetSrc = props.setWidgetSrc;
  const viewSourceWidget = props.widgets.viewSource;

  useEffect(() => {
    if (list_tab) {
      setWidgetProps(Object.fromEntries([...query.entries()]));
    }
  }, [list_tab]);

  useEffect(() => {
    setWidgetProps(Object.fromEntries([...query.entries()]));
  }, [query]);

  useEffect(() => {
    setTimeout(() => {
      setWidgetSrc(
        src === viewSourceWidget && query.get('src')
          ? {
              edit: query.get('src'),
              view: null,
            }
          : {
              edit: src,
              view: src,
            }
      );

      analytics('view', {
        props: {
          widget: src,
        },
      });
    }, 1);
  }, [src, query, setWidgetSrc, viewSourceWidget]);

  return (
    <div className='container-xl'>
      <div className='row'>
        <div
          className='d-inline-block position-relative overflow-hidden'
          style={{
            // "--body-top-padding": "24px",
            paddingTop: 'var(--body-top-padding)',
          }}
        >
          <Widget
            key={props.tos.checkComponentPath}
            src={props.tos.checkComponentPath}
            props={{
              logOut: props.logOut,
              targetProps: widgetProps,
              targetComponent: src,
              tosName: props.tos.contentComponentPath,
              canCustomHome: !widgetSrc,
            }}
          />{' '}
        </div>
      </div>
    </div>
  );
}
