﻿#target "InDesign"var newFolder = Folder.selectDialog ('Choose output folder');if (newFolder != null)	app.documents[0].exportFile(ExportFormat.PDF_TYPE, File(newFolder.fullName.toString() + '\/' + newFolder.name.toString() + '.pdf'), false, app.pdfExportPresets.itemByName('[Smallest File Size]'));