import time
from selenium import webdriver

driver = webdriver.Chrome('./chromedriver')

driver.get('https://checkboxrace.com/')

all_checkboxes =  driver.find_elements_by_tag_name('input')

for checkbox in all_checkboxes:
    checkbox.click()
    time.sleep(0.1)