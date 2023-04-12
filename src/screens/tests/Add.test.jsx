import React from "react";
import * as imagePicker from 'expo-image-picker';

import AddScreen from "../Add";
import {
	ADD_SCREEN,
	ADD_SCREEN_ADD_BUTTON,
	ADD_SCREEN_CATEGORY_INPUT,
	ADD_SCREEN_CLOSE_MENU_PRESSABLE,
	ADD_SCREEN_DESCRIPTION_INPUT,
	ADD_SCREEN_IMAGE,
	ADD_SCREEN_IMAGE_PRESSABLE,
	ADD_SCREEN_TITLE_INPUT,
	BUTTON
} from '../../utils/tests/testIDs';
import { fireEvent, render, waitFor } from "../../utils/tests/testUtils";

describe('Add screen tests', () => {
	afterEach(() => {
		// restore the spy created with spyOn
		jest.restoreAllMocks();
	});

	it('Should display AddScreen', () => {
		const { queryByText, queryByTestId } = render(<AddScreen />)

		expect(queryByTestId(ADD_SCREEN)).not.toBeNull();

		// Should diplay the inputs
		expect(queryByTestId(ADD_SCREEN_CATEGORY_INPUT)).not.toBeNull();
		expect(queryByTestId(ADD_SCREEN_DESCRIPTION_INPUT)).not.toBeNull();
		expect(queryByTestId(ADD_SCREEN_TITLE_INPUT)).not.toBeNull();

		// Should display 'Import image' button
		expect(queryByTestId(BUTTON)).not.toBeNull();
		expect(queryByText("Import image".toUpperCase())).not.toBeNull();


		// Should not display image related components if an image is not selected
		expect(queryByTestId(ADD_SCREEN_IMAGE_PRESSABLE)).toBeNull();
		expect(queryByTestId(ADD_SCREEN_IMAGE)).toBeNull();
		expect(queryByTestId(ADD_SCREEN_CLOSE_MENU_PRESSABLE)).toBeNull();
		expect(queryByText("Delete")).toBeNull()

		// Should display 'ADD' button
		expect(queryByTestId(ADD_SCREEN_ADD_BUTTON)).not.toBeNull();
		expect(queryByText("Add")).not.toBeNull();

		// Error message should not be displayed 
		expect(queryByText("You must fill all the fields")).toBeNull();

	})

	it('Should display the error message when submitting a recepie withour all input fields being filled', () => {
		const { queryByText, queryByTestId } = render(<AddScreen />)
		expect(queryByTestId(ADD_SCREEN)).not.toBeNull();

		// Should display 'ADD' button
		const addButton = queryByTestId(ADD_SCREEN_ADD_BUTTON)
		expect(addButton).not.toBeNull();

		// Pressing on the button 
		fireEvent.press(addButton);

		// Error message should be displayed 
		expect(queryByText("You must fill all the fields")).not.toBeNull();
	})

	it('Should call image picker when pressing on "Import image" button', async () => {
		const { queryByText, queryByTestId, findByTestId } = render(<AddScreen />)
		const fakeUri = require('../../../assets/cookie.jpg');
		expect(queryByTestId(ADD_SCREEN)).not.toBeNull();

		// Spy (listen) the image picker lib function launchImageLibraryAsync and mock it's return value
		const imagePickerSpy = jest.spyOn(imagePicker, 'launchImageLibraryAsync').mockImplementation(() => ({
			"assets": [{
				"assetId": null,
				"base64": null,
				"duration": null,
				"exif": null,
				"height": 2268,
				"rotation": null,
				"type": "image",
				uri: "file:///home/vincent/projets_GitHub/Workshop-recipes-app-rn/assets/cookie.jpg",
				"width": 3024
			}],
			"canceled": false,
			"cancelled": false
		}

		))
		const importImageButton = queryByTestId(BUTTON)
		expect(importImageButton).not.toBeNull();

		// Pressing on the button
		fireEvent.press(importImageButton)
		waitFor(() => expect(imagePickerSpy).toHaveBeenCalledTimes(1))

		// Should display the image
		const imagePressable = await findByTestId(ADD_SCREEN_IMAGE_PRESSABLE)
		expect(imagePressable).not.toBeNull();
		expect(queryByTestId(ADD_SCREEN_IMAGE)).not.toBeNull();




	})

})