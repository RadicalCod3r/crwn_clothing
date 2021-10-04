import React from 'react';
import './directory.style.scss';
import MenuItem from '../MenuItem/menuitem.component';
import { connect } from 'react-redux';
import { selectSectionsFromDir } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

const Directory = ({ sections }) => (
    <div className="directory-menu">
        {sections.map(({ id, ...otherParams }) => (
            <MenuItem key={id} {...otherParams} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectSectionsFromDir
})

export default connect(mapStateToProps)(Directory);