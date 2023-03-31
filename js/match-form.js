function createMatchForm() {
    // Add your code below
    const photos = new MediaUpload('Take a photo of the robot', 'robot-pic');

    matchForm.sections.autonomous.addQuestion(photos);
    // Add your code above
    matchForm.renderSections();
}
