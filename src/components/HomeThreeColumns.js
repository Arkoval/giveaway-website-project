import React from 'react';
import ThreeColumnsElement from './HomeThreeColumnsElement'

function HomeThreeColumns() {
    return (
    <div className={'threeColumnsBox'}>
        <ThreeColumnsElement
        num={'10'}
        title={'Oddanych Worków'}
        text={'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'}
        />
        <ThreeColumnsElement
            num={'5'}
            title={'Wspartych organizacji'}
            text={'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'}
        />
        <ThreeColumnsElement
            num={'7'}
            title={'Zorganizowanych zbiórek'}
            text={'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'}
        />

    </div>
    )
}

export default HomeThreeColumns