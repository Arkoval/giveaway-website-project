import React from 'react';
import ColsEle from './HomeThreeColsEle'

function HomeThreeCols() {
    return (
    <div className={'threeCols'}>
        <ColsEle
        num={'10'}
        title={'Oddanych Worków'}
        text={'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'}
        />
        <ColsEle
            num={'5'}
            title={'Wspartych organizacji'}
            text={'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'}
        />
        <ColsEle
            num={'7'}
            title={'Zorganizowanych zbiórek'}
            text={'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'}
        />

    </div>
    )
}

export default HomeThreeCols