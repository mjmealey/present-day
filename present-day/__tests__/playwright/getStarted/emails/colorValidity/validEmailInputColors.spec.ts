import { Locator, test, expect } from "@playwright/test";
import {
  setEmailPlaceholder,
  confirmEmailPlaceholder,
} from "../../../variables/placeholders.js";
import { signUpPage } from "../../../variables/urls.js";
import { confirmEmail, setEmail } from "../../../variables/inputIds.js";
import { colors } from "../../../../../src/objects/formState.js";
