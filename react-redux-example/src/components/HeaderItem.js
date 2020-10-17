import React from 'react';

const HeaderItem = ({name, icon}) => {
	if (icon) {
		return (
			<li class="nav-item">
				<a class="nav-link active" href=""><i class={icon}></i>{name}</a>
			</li>
		);
	}
  return (
    <li class="nav-item">
			<a class="nav-link active" href="">{name}</a>
		</li>
  );
}

export default HeaderItem;