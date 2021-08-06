import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default class CardData extends Component {

    render() {
        const header = (
            <img alt="Card" src="https://kbimages1-a.akamaihd.net/ccff3e25-3088-4564-9347-a61994f25e38/353/569/90/False/gate-change.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
        );
        const footer = (
            <span>
                <Button label="Save" icon="pi pi-check" />
                <Button label="Cancel" icon="pi pi-times" className="p-button-secondary p-ml-2" />
            </span>
        );

        return (
            <div>
                <Card title="Simple Card" style={{ width: '25rem', marginBottom: '2em' }}>
                    <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                </Card>

                <Card title="Advanced Card" subTitle="Subtitle" style={{ width: '25em' }} footer={footer} header={header}>
                    <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                </Card>
            </div>
        )
    }
}
